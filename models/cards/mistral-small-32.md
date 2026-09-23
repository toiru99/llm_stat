---
type: Model
title: Mistral Small 3.2
creator: Mistral
license: Open
intelligence_index: 8.0
price_blended_usd_1m: 0.12
output_speed_tps: 157.0
context_window: 128000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 25.3, z: -0.78, r: 38.3, estimated: false }  # 전문 지식
  reasoning: { s: 17.6, z: -0.85, r: 37.2, estimated: false }  # 추론
  coding: { s: 28.0, z: -0.25, r: 46.3, estimated: false }  # 코딩
  agentic: { s: 13.2, z: -0.95, r: 35.8, estimated: false }  # 에이전트
  trust: { s: 21.6, z: -0.19, r: 47.2, estimated: false }  # 신뢰성
  multimodal: { s: 45.2, z: -1.27, r: 31.0, estimated: false }  # 멀티모달
  long_context: { s: 22.5, z: -0.86, r: 37.2, estimated: false }  # 긴문맥
  instruction: { s: 29.6, z: -1.0, r: 35.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small 3.2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# Mistral Small 3.2

Mistral · Open · Small · 컨텍스트 128k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $0.12/1M · 157.0 t/s · TTFT 0.78s · 128k ctx` · 가성비 66.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.3 | -0.78 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 51.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 37.2 | -0.85 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 51.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 46.3 | -0.25 | 실측 | [[scicode]] 29.0%×1.0, [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 35.8 | -0.95 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 30.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 47.2 | -0.19 | 실측 | [[aa-omniscience]] 23.0%×1.0 |
| 멀티모달 | 31.0 | -1.27 | 실측 | [[mmmu-pro]] 48.0%×1.0 |
| 긴문맥 | 37.2 | -0.86 | 실측 | [[aa-lcr]] 20.0%×1.0 |
| 지시 따르기 | 35.0 | -1.0 | 실측 | [[ifbench]] 33.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
