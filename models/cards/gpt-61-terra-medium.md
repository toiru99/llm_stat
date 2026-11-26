---
type: Model
title: GPT-6.1 Terra (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 38.1147026172924
price_blended_usd_1m: 0.735
output_speed_tps: 62.5086412547887
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 53.5, z: 0.33, r: 54.9, estimated: false }  # 전문 지식
  reasoning: { s: 56.7, z: 1.07, r: 66.1, estimated: false }  # 추론
  coding: { s: 73.5, z: 1.09, r: 66.4, estimated: false }  # 코딩
  agentic: { s: 76.1, z: 1.02, r: 65.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 91.1, z: 1.0, r: 65.1, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.02, r: 65.3, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Terra (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# GPT-6.1 Terra (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **38.1147026172924**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 멀티모달, 전문 지식

## 실용 지표
`입력 $1.0 · 출력 $5.0 · 혼합 $0.735/1M · 62.5086412547887 t/s · TTFT 5.74748865264036s · 1M ctx` · 가성비 51.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 54.9 | +0.33 | 실측 | [[humanitys-last-exam]] 40.2224%×0.3 |
| 추론 | 66.1 | +1.07 | 실측 | [[critpt]] 21.4286%×1.0, [[humanitys-last-exam]] 40.2224%×1.0 |
| 코딩 | 66.4 | +1.09 | 실측 | [[scicode]] 51.6204%×1.0 |
| 에이전트 | 65.4 | +1.02 | 실측 | [[gdpval]] 1324.62 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 65.1 | +1.0 | 실측 | [[mmmu-pro]] 82.7746%×1.0 |
| 긴문맥 | 65.3 | +1.02 | 실측 | [[aa-lcr]] 80.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
