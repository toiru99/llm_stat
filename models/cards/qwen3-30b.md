---
type: Model
title: Qwen3 30B
creator: Alibaba
license: Open
intelligence_index: 9.0
price_blended_usd_1m: 0.42
output_speed_tps: 104.0
context_window: 32800
status: past
size_class: Small
params_b: 30.5
is_reasoning: true
radar:
  knowledge: { s: 30.5, z: -0.51, r: 42.4, estimated: false }  # 전문 지식
  reasoning: { s: 23.5, z: -0.56, r: 41.7, estimated: false }  # 추론
  coding: { s: 32.1, z: -0.65, r: 40.3, estimated: false }  # 코딩
  agentic: { s: 14.6, z: -0.87, r: 37.0, estimated: false }  # 에이전트
  trust: { s: 17.5, z: -0.31, r: 45.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.51, r: 27.3, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -0.48, r: 42.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 30B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# Qwen3 30B

Alibaba · Open · Small(30.5B) · 컨텍스트 32k · 종합지능 **9.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.2 · 출력 $2.4 · 혼합 $0.42/1M · 104.0 t/s · TTFT 2.14s · 32k ctx` · 가성비 21.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.4 | -0.51 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 62.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 41.7 | -0.56 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 62.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 40.3 | -0.65 | 실측 | [[scicode]] 28.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 37.0 | -0.87 | 실측 | [[tau2-bench]] 26.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 45.3 | -0.31 | 실측 | [[aa-omniscience]] 19.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.3 | -1.51 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 42.8 | -0.48 | 실측 | [[ifbench]] 41.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
