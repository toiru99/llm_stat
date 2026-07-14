---
type: Model
title: Apriel-v1.5-15B-Thinker
creator: ServiceNow
license: Open
intelligence_index: 21.0
price_blended_usd_1m: 0.0
output_speed_tps: None
context_window: 128000
status: past
size_class: Small
params_b: 15
is_reasoning: true
radar:
  knowledge: { s: 35.5, z: -0.24, r: 46.5, estimated: false }  # 전문 지식
  reasoning: { s: 32.3, z: -0.06, r: 49.1, estimated: false }  # 추론
  coding: { s: 44.4, z: -0.07, r: 49.0, estimated: false }  # 코딩
  agentic: { s: 42.7, z: 0.26, r: 53.8, estimated: false }  # 에이전트
  trust: { s: 15.3, z: -0.59, r: 41.2, estimated: false }  # 신뢰성
  multimodal: { s: 60.9, z: -0.5, r: 42.4, estimated: false }  # 멀티모달
  long_context: { s: 26.3, z: -0.65, r: 40.2, estimated: false }  # 긴문맥
  instruction: { s: 70.4, z: 0.75, r: 61.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Apriel-v1.5-15B-Thinker
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-14
timestamp: 2026-07-14T00:00:00Z
---

# Apriel-v1.5-15B-Thinker

ServiceNow · Open · Small(15B) · 컨텍스트 128k · 종합지능 **21.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 신뢰성, 긴문맥

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0.0/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.5 | -0.24 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 71.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 49.1 | -0.06 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 71.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 49.0 | -0.07 | 실측 | [[scicode]] 35.0%×1.0, [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 53.8 | +0.26 | 실측 | [[tau2-bench]] 68.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | 41.2 | -0.59 | 실측 | [[aa-omniscience]] 14.0%×1.0 |
| 멀티모달 | 42.4 | -0.5 | 실측 | [[mmmu-pro]] 57.0%×1.0 |
| 긴문맥 | 40.2 | -0.65 | 실측 | [[aa-lcr]] 20.0%×1.0 |
| 지시 따르기 | 61.3 | +0.75 | 실측 | [[ifbench]] 62.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
