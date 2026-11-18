---
type: Model
title: GPT-6.1 Terra (high)
creator: OpenAI
license: Proprietary
intelligence_index: 42.4344508712563
price_blended_usd_1m: 0.735
output_speed_tps: 65.412772312647
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 57.7, z: 0.5, r: 57.5, estimated: false }  # 전문 지식
  reasoning: { s: 64.8, z: 1.44, r: 71.6, estimated: false }  # 추론
  coding: { s: 73.5, z: 1.14, r: 67.1, estimated: false }  # 코딩
  agentic: { s: 77.4, z: 1.13, r: 66.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 92.4, z: 1.07, r: 66.1, estimated: false }  # 멀티모달
  long_context: { s: 92.9, z: 1.17, r: 67.5, estimated: false }  # 긴문맥
  instruction: { s: 68.8, z: 0.62, r: 59.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Terra (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# GPT-6.1 Terra (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **42.4344508712563**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 긴문맥
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $1.0 · 출력 $5.0 · 혼합 $0.735/1M · 65.412772312647 t/s · TTFT 10.499658546813604s · 1M ctx` · 가성비 57.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.5 | +0.5 | 실측 | [[humanitys-last-exam]] 43.2808155699722%×0.3 |
| 추론 | 71.6 | +1.44 | 실측 | [[critpt]] 25.7142857142857%×1.0, [[humanitys-last-exam]] 43.2808155699722%×1.0 |
| 코딩 | 67.1 | +1.14 | 실측 | [[scicode]] 51.6203703703704%×1.0 |
| 에이전트 | 66.9 | +1.13 | 실측 | [[gdpval]] 1353.41%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 66.1 | +1.07 | 실측 | [[mmmu-pro]] 83.8150289017341%×1.0 |
| 긴문맥 | 67.5 | +1.17 | 실측 | [[aa-lcr]] 82.3333333333333%×1.0 |
| 지시 따르기 | 59.4 | +0.62 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
