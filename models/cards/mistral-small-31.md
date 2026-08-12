---
type: Model
title: Mistral Small 3.1
creator: Mistral
license: Open
intelligence_index: 15.0
price_blended_usd_1m: 0.12
output_speed_tps: 141.0
context_window: 128000
status: past
size_class: Small
params_b: 24
is_reasoning: false
radar:
  knowledge: { s: 23.7, z: -0.82, r: 37.6, estimated: false }  # 전문 지식
  reasoning: { s: 15.7, z: -0.95, r: 35.7, estimated: false }  # 추론
  coding: { s: 34.0, z: -0.55, r: 41.7, estimated: false }  # 코딩
  agentic: { s: 14.6, z: -0.85, r: 37.3, estimated: false }  # 에이전트
  trust: { s: 23.3, z: -0.14, r: 48.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 26.5, z: -0.7, r: 39.5, estimated: false }  # 긴문맥
  instruction: { s: 25.4, z: -1.17, r: 32.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small 3.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-12
timestamp: 2026-08-12T00:00:00Z
---

# Mistral Small 3.1

Mistral · Open · Small(24B) · 컨텍스트 128k · 종합지능 **15.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $0.12/1M · 141.0 t/s · TTFT 0.8s · 128k ctx` · 가성비 125.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.6 | -0.82 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 45.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 35.7 | -0.95 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 45.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 41.7 | -0.55 | 실측 | [[scicode]] 27.0%×1.0, [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 37.3 | -0.85 | 실측 | [[gdpval]] 5.0%×1.0, [[tau2-bench]] 25.0%×1.0, [[tau3-banking]] 7.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 48.0 | -0.14 | 실측 | [[aa-omniscience]] 22.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 39.5 | -0.7 | 실측 | [[aa-lcr]] 22.0%×1.0 |
| 지시 따르기 | 32.5 | -1.17 | 실측 | [[ifbench]] 30.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
