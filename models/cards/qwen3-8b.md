---
type: Model
title: Qwen3 8B
creator: Alibaba
license: Open
intelligence_index: 5.0
price_blended_usd_1m: 0.372
output_speed_tps: 39.0
context_window: 131000
status: past
size_class: Small
params_b: 8.19
is_reasoning: true
radar:
  knowledge: { s: 26.6, z: -0.69, r: 39.7, estimated: false }  # 전문 지식
  reasoning: { s: 20.7, z: -0.69, r: 39.7, estimated: false }  # 추론
  coding: { s: 20.1, z: -0.46, r: 43.1, estimated: false }  # 코딩
  agentic: { s: 10.3, z: -1.04, r: 34.4, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.83, r: 37.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.51, r: 27.4, estimated: false }  # 긴문맥
  instruction: { s: 29.6, z: -0.96, r: 35.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-09
timestamp: 2026-09-09T00:00:00Z
---

# Qwen3 8B

Alibaba · Open · Small(8.19B) · 컨텍스트 131k · 종합지능 **5.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.18 · 출력 $2.1 · 혼합 $0.372/1M · 39.0 t/s · TTFT 3.67s · 131k ctx` · 가성비 13.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.7 | -0.69 | 실측 | [[aa-omniscience]] 14.0%×1.0, [[gpqa-diamond]] 59.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 39.7 | -0.69 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 59.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 43.1 | -0.46 | 실측 | [[scicode]] 28.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 34.4 | -1.04 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 28.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 37.6 | -0.83 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.4 | -1.51 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 35.5 | -0.96 | 실측 | [[ifbench]] 33.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
