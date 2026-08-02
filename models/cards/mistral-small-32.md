---
type: Model
title: Mistral Small 3.2
creator: Mistral
license: Open
intelligence_index: 11.0
price_blended_usd_1m: None
output_speed_tps: 153.0
context_window: 128000
status: past
size_class: Small
params_b: 24
is_reasoning: false
radar:
  knowledge: { s: 26.2, z: -0.71, r: 39.4, estimated: false }  # 전문 지식
  reasoning: { s: 18.2, z: -0.82, r: 37.7, estimated: false }  # 추론
  coding: { s: 32.4, z: -0.61, r: 40.9, estimated: false }  # 코딩
  agentic: { s: 14.6, z: -0.85, r: 37.3, estimated: false }  # 에이전트
  trust: { s: 26.4, z: -0.08, r: 48.8, estimated: false }  # 신뢰성
  multimodal: { s: 47.1, z: -1.18, r: 32.2, estimated: false }  # 멀티모달
  long_context: { s: 22.4, z: -0.8, r: 38.0, estimated: false }  # 긴문맥
  instruction: { s: 29.6, z: -0.97, r: 35.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small 3.2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-02
timestamp: 2026-08-02T00:00:00Z
---

# Mistral Small 3.2

Mistral · Open · Small(24B) · 컨텍스트 128k · 종합지능 **11.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $None/1M · 153.0 t/s · TTFT 0.78s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.4 | -0.71 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 51.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 37.7 | -0.82 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 51.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 40.9 | -0.61 | 실측 | [[scicode]] 26.0%×1.0, [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 37.3 | -0.85 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 30.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 48.8 | -0.08 | 실측 | [[aa-omniscience]] 24.0%×1.0 |
| 멀티모달 | 32.2 | -1.18 | 실측 | [[mmmu-pro]] 48.0%×1.0 |
| 긴문맥 | 38.0 | -0.8 | 실측 | [[aa-lcr]] 17.0%×1.0 |
| 지시 따르기 | 35.4 | -0.97 | 실측 | [[ifbench]] 33.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
