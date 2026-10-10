---
type: Model
title: GPT-5.5 (low)
creator: OpenAI
license: Proprietary
intelligence_index: 31.0
price_blended_usd_1m: 4.35
output_speed_tps: 79.0
context_window: 922000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.9, z: 1.73, r: 75.9, estimated: false }  # 전문 지식
  reasoning: { s: 57.5, z: 0.95, r: 64.2, estimated: false }  # 추론
  coding: { s: 78.8, z: 1.43, r: 71.5, estimated: false }  # 코딩
  agentic: { s: 63.1, z: 0.92, r: 63.8, estimated: false }  # 에이전트
  trust: { s: 10.3, z: -0.76, r: 38.6, estimated: false }  # 신뢰성
  multimodal: { s: 87.7, z: 0.81, r: 62.2, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.18, r: 67.7, estimated: false }  # 긴문맥
  instruction: { s: 73.2, z: 0.79, r: 61.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-10
timestamp: 2026-10-10T00:00:00Z
---

# GPT-5.5 (low)

OpenAI · Proprietary · Unknown · 컨텍스트 922k · 종합지능 **31.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 79.0 t/s · TTFT 1.54s · 922k ctx` · 가성비 7.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 75.9 | +1.73 | 실측 | [[aa-omniscience]] 55.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 33.0%×0.3 |
| 추론 | 64.2 | +0.95 | 실측 | [[critpt]] 8.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 33.0%×1.0 |
| 코딩 | 71.5 | +1.43 | 실측 | [[terminal-bench]] 52.0%×0.5 |
| 에이전트 | 63.8 | +0.92 | 실측 | [[gdpval]] 27.0%×1.0, [[tau2-bench]] 84.0%×1.0, [[tau3-banking]] 25.0%×1.0, [[terminal-bench]] 52.0%×1.0 |
| 신뢰성 | 38.6 | -0.76 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | 62.2 | +0.81 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 67.7 | +1.18 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 61.8 | +0.79 | 실측 | [[ifbench]] 64.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
