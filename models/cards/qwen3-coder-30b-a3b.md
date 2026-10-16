---
type: Model
title: Qwen3 Coder 30B A3B
creator: Alibaba
license: Open
intelligence_index: 10.0
price_blended_usd_1m: 0.2098
output_speed_tps: 156.0
context_window: 262000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 26.4, z: -0.76, r: 38.6, estimated: false }  # 전문 지식
  reasoning: { s: 17.9, z: -0.86, r: 37.1, estimated: false }  # 추론
  coding: { s: 22.7, z: -0.49, r: 42.6, estimated: false }  # 코딩
  agentic: { s: 29.0, z: -0.39, r: 44.1, estimated: false }  # 에이전트
  trust: { s: 18.6, z: -0.39, r: 44.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 37.1, z: -0.46, r: 43.1, estimated: false }  # 긴문맥
  instruction: { s: 29.6, z: -1.04, r: 34.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Coder 30B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-16
timestamp: 2026-10-16T00:00:00Z
---

# Qwen3 Coder 30B A3B

Alibaba · Open · Small · 컨텍스트 262k · 종합지능 **10.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.15 · 출력 $0.75 · 혼합 $0.2098/1M · 156.0 t/s · TTFT 1.01s · 262k ctx` · 가성비 47.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.6 | -0.76 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 52.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 37.1 | -0.86 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 52.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 42.6 | -0.49 | 실측 | [[terminal-bench]] 15.0%×0.5 |
| 에이전트 | 44.1 | -0.39 | 실측 | [[tau2-bench]] 35.0%×1.0, [[terminal-bench]] 15.0%×1.0 |
| 신뢰성 | 44.2 | -0.39 | 실측 | [[aa-omniscience]] 20.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 43.1 | -0.46 | 실측 | [[aa-lcr]] 33.0%×1.0 |
| 지시 따르기 | 34.3 | -1.04 | 실측 | [[ifbench]] 33.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
