---
type: Model
title: GPT-6.1 Terra (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 38.1652076677975
price_blended_usd_1m: 0.735
output_speed_tps: 62.2849839005183
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 53.5, z: 0.3, r: 54.4, estimated: false }  # 전문 지식
  reasoning: { s: 56.7, z: 1.04, r: 65.6, estimated: false }  # 추론
  coding: { s: 73.5, z: 1.14, r: 67.0, estimated: false }  # 코딩
  agentic: { s: 76.1, z: 1.08, r: 66.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 91.1, z: 1.0, r: 65.1, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.11, r: 66.6, estimated: false }  # 긴문맥
  instruction: { s: 66.5, z: 0.53, r: 57.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Terra (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# GPT-6.1 Terra (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **38.1652076677975**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $1.0 · 출력 $5.0 · 혼합 $0.735/1M · 62.2849839005183 t/s · TTFT 5.43383211977909s · 1M ctx` · 가성비 51.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.4 | +0.3 | 실측 | [[humanitys-last-exam]] 40.2224281742354%×0.3 |
| 추론 | 65.6 | +1.04 | 실측 | [[critpt]] 21.4285714285714%×1.0, [[humanitys-last-exam]] 40.2224281742354%×1.0 |
| 코딩 | 67.0 | +1.14 | 실측 | [[scicode]] 51.6203703703704%×1.0 |
| 에이전트 | 66.2 | +1.08 | 실측 | [[gdpval]] 1324.24%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 65.1 | +1.0 | 실측 | [[mmmu-pro]] 82.7745664739884%×1.0 |
| 긴문맥 | 66.6 | +1.11 | 실측 | [[aa-lcr]] 80.6666666666667%×1.0 |
| 지시 따르기 | 57.9 | +0.53 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
