---
type: Model
title: Qwen3 8B
creator: Alibaba
license: Open
intelligence_index: 8.0
price_blended_usd_1m: 0.232
output_speed_tps: 40.0
context_window: 131000
status: past
size_class: Small
params_b: 8.19
is_reasoning: false
radar:
  knowledge: { s: 26.5, z: -0.7, r: 39.5, estimated: false }  # 전문 지식
  reasoning: { s: 21.4, z: -0.66, r: 40.1, estimated: false }  # 추론
  coding: { s: 26.6, z: -0.85, r: 37.2, estimated: false }  # 코딩
  agentic: { s: 11.5, z: -0.97, r: 35.4, estimated: false }  # 에이전트
  trust: { s: 11.5, z: -0.79, r: 38.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.47, r: 28.0, estimated: false }  # 긴문맥
  instruction: { s: 29.6, z: -0.98, r: 35.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-05
timestamp: 2026-08-05T00:00:00Z
---

# Qwen3 8B

Alibaba · Open · Small(8.19B) · 컨텍스트 131k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $0.18 · 출력 $2.1 · 혼합 $0.232/1M · 40.0 t/s · TTFT 3.67s · 131k ctx` · 가성비 34.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.5 | -0.7 | 실측 | [[aa-omniscience]] 13.0%×1.0, [[gpqa-diamond]] 59.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 40.1 | -0.66 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 59.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 37.2 | -0.85 | 실측 | [[scicode]] 23.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 35.4 | -0.97 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 28.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 38.2 | -0.79 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.0 | -1.47 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 35.4 | -0.98 | 실측 | [[ifbench]] 33.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
