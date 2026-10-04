---
type: Model
title: GPT-4o (Aug)
creator: OpenAI
license: Proprietary
intelligence_index: 8.0
price_blended_usd_1m: 2.375
output_speed_tps: 105.0
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 32.9, z: -0.45, r: 43.3, estimated: false }  # 전문 지식
  reasoning: { s: 16.8, z: -0.89, r: 36.6, estimated: false }  # 추론
  coding: { s: 12.1, z: -0.83, r: 37.5, estimated: false }  # 코딩
  agentic: { s: 20.7, z: -0.69, r: 39.6, estimated: false }  # 에이전트
  trust: { s: 41.2, z: 0.68, r: 60.3, estimated: false }  # 신뢰성
  multimodal: { s: 56.2, z: -0.76, r: 38.6, estimated: false }  # 멀티모달
  long_context: { s: 46.1, z: -0.17, r: 47.5, estimated: false }  # 긴문맥
  instruction: { s: 33.8, z: -0.85, r: 37.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4o (Aug)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-04
timestamp: 2026-10-04T00:00:00Z
---

# GPT-4o (Aug)

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 지시 따르기, 추론

## 실용 지표
`입력 $2.5 · 출력 $10.0 · 혼합 $2.375/1M · 105.0 t/s · TTFT 1.06s · 128k ctx` · 가성비 3.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.3 | -0.45 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 52.0%×0.4, [[humanitys-last-exam]] 2.0%×0.3 |
| 추론 | 36.6 | -0.89 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 52.0%×1.0, [[humanitys-last-exam]] 2.0%×1.0 |
| 코딩 | 37.5 | -0.83 | 실측 | [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 39.6 | -0.69 | 실측 | [[tau2-bench]] 29.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 60.3 | +0.68 | 실측 | [[aa-omniscience]] 42.0%×1.0 |
| 멀티모달 | 38.6 | -0.76 | 실측 | [[mmmu-pro]] 56.0%×1.0 |
| 긴문맥 | 47.5 | -0.17 | 실측 | [[aa-lcr]] 41.0%×1.0 |
| 지시 따르기 | 37.2 | -0.85 | 실측 | [[ifbench]] 36.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
