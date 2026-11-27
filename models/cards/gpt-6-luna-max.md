---
type: Model
title: GPT-6 Luna (max)
creator: OpenAI
license: Proprietary
intelligence_index: 27.8552004938153
price_blended_usd_1m: 0.077
output_speed_tps: 129.619138512547
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 51.1, z: 0.21, r: 53.2, estimated: false }  # 전문 지식
  reasoning: { s: 52.8, z: 0.88, r: 63.1, estimated: false }  # 추론
  coding: { s: 78.5, z: 1.26, r: 68.9, estimated: false }  # 코딩
  agentic: { s: 81.3, z: 1.2, r: 68.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 86.9, z: 0.79, r: 61.9, estimated: false }  # 멀티모달
  long_context: { s: 94.0, z: 1.11, r: 66.7, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Luna (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# GPT-6 Luna (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **27.8552004938153**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 멀티모달, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 129.619138512547 t/s · TTFT 63.8137010265674s · 1M ctx` · 가성비 361.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 53.2 | +0.21 | 실측 | [[humanitys-last-exam]] 38.5079%×0.3 |
| 추론 | 63.1 | +0.88 | 실측 | [[critpt]] 19.4286%×1.0, [[humanitys-last-exam]] 38.5079%×1.0 |
| 코딩 | 68.9 | +1.26 | 실측 | [[scicode]] 54.6296%×1.0 |
| 에이전트 | 68.1 | +1.2 | 실측 | [[gdpval]] 1443.09 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.9 | +0.79 | 실측 | [[mmmu-pro]] 79.6532%×1.0 |
| 긴문맥 | 66.7 | +1.11 | 실측 | [[aa-lcr]] 83.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
