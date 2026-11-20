---
type: Model
title: GPT-6.1 Sol (low)
creator: OpenAI
license: Proprietary
intelligence_index: 34.8029244314559
price_blended_usd_1m: 1.47
output_speed_tps: 48.8983285738393
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 63.2, z: 0.77, r: 61.5, estimated: false }  # 전문 지식
  reasoning: { s: 66.4, z: 1.52, r: 72.8, estimated: false }  # 추론
  coding: { s: 76.2, z: 1.23, r: 68.4, estimated: false }  # 코딩
  agentic: { s: 76.0, z: 1.08, r: 66.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 91.5, z: 1.03, r: 65.4, estimated: false }  # 멀티모달
  long_context: { s: 94.7, z: 1.22, r: 68.3, estimated: false }  # 긴문맥
  instruction: { s: 72.1, z: 0.76, r: 61.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Sol (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# GPT-6.1 Sol (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **34.8029244314559** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 48.8983285738393 t/s · TTFT 3.20956396538872s · 1M ctx` · 가성비 23.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.5 | +0.77 | 실측 | [[humanitys-last-exam]] 47.3586654309546%×0.3 |
| 추론 | 72.8 | +1.52 | 실측 | [[critpt]] 24.8571428571429%×1.0, [[humanitys-last-exam]] 47.3586654309546%×1.0 |
| 코딩 | 68.4 | +1.23 | 실측 | [[scicode]] 53.2407407407407%×1.0 |
| 에이전트 | 66.1 | +1.08 | 실측 | [[gdpval]] 1321.54%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 65.4 | +1.03 | 실측 | [[mmmu-pro]] 83.121387283237%×1.0 |
| 긴문맥 | 68.3 | +1.22 | 실측 | [[aa-lcr]] 84.0%×1.0 |
| 지시 따르기 | 61.5 | +0.76 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
