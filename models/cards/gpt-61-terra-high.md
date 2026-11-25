---
type: Model
title: GPT-6.1 Terra (high)
creator: OpenAI
license: Proprietary
intelligence_index: 42.5354609722664
price_blended_usd_1m: 0.735
output_speed_tps: 67.1166400642704
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 57.7, z: 0.53, r: 57.9, estimated: false }  # 전문 지식
  reasoning: { s: 64.8, z: 1.47, r: 72.1, estimated: false }  # 추론
  coding: { s: 73.5, z: 1.09, r: 66.4, estimated: false }  # 코딩
  agentic: { s: 77.4, z: 1.07, r: 66.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 92.4, z: 1.07, r: 66.1, estimated: false }  # 멀티모달
  long_context: { s: 92.9, z: 1.08, r: 66.1, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Terra (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# GPT-6.1 Terra (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **42.5354609722664**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 멀티모달, 전문 지식

## 실용 지표
`입력 $1.0 · 출력 $5.0 · 혼합 $0.735/1M · 67.1166400642704 t/s · TTFT 11.5568658494089s · 1M ctx` · 가성비 57.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 57.9 | +0.53 | 실측 | [[humanitys-last-exam]] 43.2808%×0.3 |
| 추론 | 72.1 | +1.47 | 실측 | [[critpt]] 25.7143%×1.0, [[humanitys-last-exam]] 43.2808%×1.0 |
| 코딩 | 66.4 | +1.09 | 실측 | [[scicode]] 51.6204%×1.0 |
| 에이전트 | 66.1 | +1.07 | 실측 | [[gdpval]] 1354.59 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 66.1 | +1.07 | 실측 | [[mmmu-pro]] 83.815%×1.0 |
| 긴문맥 | 66.1 | +1.08 | 실측 | [[aa-lcr]] 82.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
