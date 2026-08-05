---
type: Model
title: Apriel-v1.5-15B-Thinker
creator: ServiceNow
license: Open
intelligence_index: 21.0
price_blended_usd_1m: 0
output_speed_tps: None
context_window: 128000
status: past
size_class: Small
params_b: 15
is_reasoning: true
radar:
  knowledge: { s: 35.5, z: -0.27, r: 45.9, estimated: false }  # 전문 지식
  reasoning: { s: 32.3, z: -0.11, r: 48.3, estimated: false }  # 추론
  coding: { s: 44.4, z: -0.11, r: 48.4, estimated: false }  # 코딩
  agentic: { s: 42.7, z: 0.24, r: 53.6, estimated: false }  # 에이전트
  trust: { s: 14.9, z: -0.63, r: 40.6, estimated: false }  # 신뢰성
  multimodal: { s: 60.0, z: -0.56, r: 41.5, estimated: false }  # 멀티모달
  long_context: { s: 26.3, z: -0.69, r: 39.7, estimated: false }  # 긴문맥
  instruction: { s: 70.4, z: 0.71, r: 60.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Apriel-v1.5-15B-Thinker
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-05
timestamp: 2026-08-05T00:00:00Z
---

# Apriel-v1.5-15B-Thinker

ServiceNow · Open · Small(15B) · 컨텍스트 128k · 종합지능 **21.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 신뢰성, 긴문맥

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.9 | -0.27 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 71.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 48.3 | -0.11 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 71.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 48.4 | -0.11 | 실측 | [[scicode]] 35.0%×1.0, [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 53.6 | +0.24 | 실측 | [[tau2-bench]] 68.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | 40.6 | -0.63 | 실측 | [[aa-omniscience]] 14.0%×1.0 |
| 멀티모달 | 41.5 | -0.56 | 실측 | [[mmmu-pro]] 57.0%×1.0 |
| 긴문맥 | 39.7 | -0.69 | 실측 | [[aa-lcr]] 20.0%×1.0 |
| 지시 따르기 | 60.7 | +0.71 | 실측 | [[ifbench]] 62.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
