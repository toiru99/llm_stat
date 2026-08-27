---
type: Model
title: GPT-5.5 (low)
creator: OpenAI
license: Proprietary
intelligence_index: 44.0
price_blended_usd_1m: 4.35
output_speed_tps: 83.0
context_window: 922000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 82.5, z: 1.95, r: 79.3, estimated: false }  # 전문 지식
  reasoning: { s: 59.9, z: 1.16, r: 67.4, estimated: false }  # 추론
  coding: { s: 84.0, z: 1.44, r: 71.6, estimated: false }  # 코딩
  agentic: { s: 65.9, z: 1.09, r: 66.4, estimated: false }  # 에이전트
  trust: { s: 11.6, z: -0.72, r: 39.2, estimated: false }  # 신뢰성
  multimodal: { s: 91.4, z: 0.91, r: 63.6, estimated: false }  # 멀티모달
  long_context: { s: 94.0, z: 1.29, r: 69.3, estimated: false }  # 긴문맥
  instruction: { s: 73.2, z: 0.76, r: 61.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# GPT-5.5 (low)

OpenAI · Proprietary · Unknown · 컨텍스트 922k · 종합지능 **44.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 83.0 t/s · TTFT 1.8s · 922k ctx` · 가성비 10.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 79.3 | +1.95 | 실측 | [[aa-omniscience]] 55.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 33.0%×0.3 |
| 추론 | 67.4 | +1.16 | 실측 | [[critpt]] 8.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 33.0%×1.0 |
| 코딩 | 71.6 | +1.44 | 실측 | [[scicode]] 52.0%×1.0, [[terminal-bench]] 52.0%×0.5 |
| 에이전트 | 66.4 | +1.09 | 실측 | [[gdpval]] 34.0%×1.0, [[tau2-bench]] 84.0%×1.0, [[tau3-banking]] 25.0%×1.0, [[terminal-bench]] 52.0%×1.0 |
| 신뢰성 | 39.2 | -0.72 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | 63.6 | +0.91 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 69.3 | +1.29 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 61.5 | +0.76 | 실측 | [[ifbench]] 64.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
