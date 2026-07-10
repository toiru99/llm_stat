---
type: Model
title: GPT-5 nano (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 19.0
price_blended_usd_1m: 0.05
output_speed_tps: 139.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 33.0, z: -0.35, r: 44.7, estimated: false }  # 전문 지식
  reasoning: { s: 27.1, z: -0.33, r: 45.0, estimated: false }  # 추론
  coding: { s: 46.4, z: 0.02, r: 50.3, estimated: false }  # 코딩
  agentic: { s: 28.0, z: -0.31, r: 45.3, estimated: false }  # 에이전트
  trust: { s: 58.8, z: 1.48, r: 72.1, estimated: false }  # 신뢰성
  multimodal: { s: 62.3, z: -0.43, r: 43.5, estimated: false }  # 멀티모달
  long_context: { s: 52.6, z: 0.13, r: 52.0, estimated: false }  # 긴문맥
  instruction: { s: 76.1, z: 0.98, r: 64.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 nano (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# GPT-5 nano (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **19.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $0.05 · 출력 $0.4 · 혼합 $0.05/1M · 139.0 t/s · TTFT 55.31s · 400k ctx` · 가성비 380.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.7 | -0.35 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 67.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 45.0 | -0.33 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 67.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 50.3 | +0.02 | 실측 | [[scicode]] 34.0%×1.0, [[terminal-bench]] 17.0%×0.5 |
| 에이전트 | 45.3 | -0.31 | 실측 | [[tau2-bench]] 30.0%×1.0, [[terminal-bench]] 17.0%×1.0 |
| 신뢰성 | 72.1 | +1.48 | 실측 | [[aa-omniscience]] 51.0%×1.0 |
| 멀티모달 | 43.5 | -0.43 | 실측 | [[mmmu-pro]] 58.0%×1.0 |
| 긴문맥 | 52.0 | +0.13 | 실측 | [[aa-lcr]] 40.0%×1.0 |
| 지시 따르기 | 64.7 | +0.98 | 실측 | [[ifbench]] 66.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
