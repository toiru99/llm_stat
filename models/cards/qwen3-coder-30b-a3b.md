---
type: Model
title: Qwen3 Coder 30B A3B
creator: Alibaba
license: Open
intelligence_index: 14.0
price_blended_usd_1m: 0.63
output_speed_tps: 88.0
context_window: 262000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 27.5, z: -0.63, r: 40.6, estimated: false }  # 전문 지식
  reasoning: { s: 18.6, z: -0.79, r: 38.1, estimated: false }  # 추론
  coding: { s: 38.7, z: -0.32, r: 45.2, estimated: false }  # 코딩
  agentic: { s: 29.0, z: -0.28, r: 45.8, estimated: false }  # 에이전트
  trust: { s: 23.5, z: -0.2, r: 47.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 38.2, z: -0.31, r: 45.4, estimated: false }  # 긴문맥
  instruction: { s: 29.6, z: -0.94, r: 36.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Coder 30B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-16
timestamp: 2026-07-16T00:00:00Z
---

# Qwen3 Coder 30B A3B

Alibaba · Open · Unknown · 컨텍스트 262k · 종합지능 **14.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.45 · 출력 $2.25 · 혼합 $0.63/1M · 88.0 t/s · TTFT 2.62s · 262k ctx` · 가성비 22.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.6 | -0.63 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 52.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 38.1 | -0.79 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 52.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 45.2 | -0.32 | 실측 | [[scicode]] 28.0%×1.0, [[terminal-bench]] 15.0%×0.5 |
| 에이전트 | 45.8 | -0.28 | 실측 | [[tau2-bench]] 35.0%×1.0, [[terminal-bench]] 15.0%×1.0 |
| 신뢰성 | 47.0 | -0.2 | 실측 | [[aa-omniscience]] 21.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 45.4 | -0.31 | 실측 | [[aa-lcr]] 29.0%×1.0 |
| 지시 따르기 | 36.0 | -0.94 | 실측 | [[ifbench]] 33.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
