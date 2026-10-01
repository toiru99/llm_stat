---
type: Model
title: Qwen3 30B
creator: Alibaba
license: Open
intelligence_index: 8.0
price_blended_usd_1m: 0.42
output_speed_tps: 107.0
context_window: 32800
status: past
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 29.7, z: -0.59, r: 41.2, estimated: false }  # 전문 지식
  reasoning: { s: 22.9, z: -0.61, r: 40.8, estimated: false }  # 추론
  coding: { s: 3.0, z: -1.14, r: 32.9, estimated: false }  # 코딩
  agentic: { s: 14.6, z: -0.92, r: 36.2, estimated: false }  # 에이전트
  trust: { s: 17.5, z: -0.42, r: 43.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.56, r: 26.6, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -0.55, r: 41.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 30B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-01
timestamp: 2026-10-01T00:00:00Z
---

# Qwen3 30B

Alibaba · Open · Small · 컨텍스트 32k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $0.2 · 출력 $2.4 · 혼합 $0.42/1M · 107.0 t/s · TTFT 2.23s · 32k ctx` · 가성비 19.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.2 | -0.59 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 62.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 40.8 | -0.61 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 62.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 32.9 | -1.14 | 실측 | [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 36.2 | -0.92 | 실측 | [[tau2-bench]] 26.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 43.6 | -0.42 | 실측 | [[aa-omniscience]] 19.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.6 | -1.56 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 41.7 | -0.55 | 실측 | [[ifbench]] 41.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
