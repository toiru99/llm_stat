---
type: Model
title: GPT-5 mini (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 24.0
price_blended_usd_1m: 0.2675
output_speed_tps: 99.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 43.9, z: 0.14, r: 52.2, estimated: false }  # 전문 지식
  reasoning: { s: 36.8, z: 0.08, r: 51.3, estimated: false }  # 추론
  coding: { s: 43.9, z: 0.41, r: 56.2, estimated: false }  # 코딩
  agentic: { s: 57.8, z: 0.78, r: 61.7, estimated: false }  # 에이전트
  trust: { s: 55.7, z: 1.47, r: 72.1, estimated: false }  # 신뢰성
  multimodal: { s: 75.0, z: 0.24, r: 53.6, estimated: false }  # 멀티모달
  long_context: { s: 80.9, z: 0.98, r: 64.7, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.27, r: 69.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 mini (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# GPT-5 mini (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **24.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.2675/1M · 99.0 t/s · TTFT 19.53s · 400k ctx` · 가성비 89.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.2 | +0.14 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 80.0%×0.4, [[humanitys-last-exam]] 16.0%×0.3 |
| 추론 | 51.3 | +0.08 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 80.0%×1.0, [[humanitys-last-exam]] 16.0%×1.0 |
| 코딩 | 56.2 | +0.41 | 실측 | [[terminal-bench]] 29.0%×0.5 |
| 에이전트 | 61.7 | +0.78 | 실측 | [[tau2-bench]] 71.0%×1.0, [[terminal-bench]] 29.0%×1.0 |
| 신뢰성 | 72.1 | +1.47 | 실측 | [[aa-omniscience]] 56.0%×1.0 |
| 멀티모달 | 53.6 | +0.24 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 64.7 | +0.98 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 69.0 | +1.27 | 실측 | [[ifbench]] 71.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
