---
type: Model
title: Qwen3 30B A3B 2507 (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 8.0
price_blended_usd_1m: 0.12
output_speed_tps: 201.0
context_window: 262000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 30.3, z: -0.6, r: 41.1, estimated: false }  # 전문 지식
  reasoning: { s: 25.0, z: -0.55, r: 41.7, estimated: false }  # 추론
  coding: { s: 9.1, z: -0.98, r: 35.4, estimated: false }  # 코딩
  agentic: { s: 9.1, z: -0.89, r: 36.7, estimated: false }  # 에이전트
  trust: { s: 3.1, z: -1.1, r: 33.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 29.2, z: -0.71, r: 39.3, estimated: false }  # 긴문맥
  instruction: { s: 29.6, z: -1.06, r: 34.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 30B A3B 2507 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Qwen3 30B A3B 2507 (non-reasoning)

Alibaba · Open · Small · 컨텍스트 262k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $0.12/1M · 201.0 t/s · TTFT 0.93s · 262k ctx` · 가성비 66.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.1 | -0.6 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 66.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 41.7 | -0.55 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 66.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 35.4 | -0.98 | 실측 | [[terminal-bench]] 6.0%×0.5 |
| 에이전트 | 36.7 | -0.89 | 실측 | [[terminal-bench]] 6.0%×1.0 |
| 신뢰성 | 33.6 | -1.1 | 실측 | [[aa-omniscience]] 5.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 39.3 | -0.71 | 실측 | [[aa-lcr]] 26.0%×1.0 |
| 지시 따르기 | 34.0 | -1.06 | 실측 | [[ifbench]] 33.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
