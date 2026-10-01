---
type: Model
title: Qwen3 Coder 30B A3B
creator: Alibaba
license: Open
intelligence_index: 10.0
price_blended_usd_1m: 0.63
output_speed_tps: 79.0
context_window: 262000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 26.4, z: -0.74, r: 38.9, estimated: false }  # 전문 지식
  reasoning: { s: 17.9, z: -0.84, r: 37.4, estimated: false }  # 추론
  coding: { s: 22.7, z: -0.46, r: 43.0, estimated: false }  # 코딩
  agentic: { s: 29.0, z: -0.37, r: 44.5, estimated: false }  # 에이전트
  trust: { s: 18.6, z: -0.38, r: 44.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 37.1, z: -0.44, r: 43.4, estimated: false }  # 긴문맥
  instruction: { s: 29.6, z: -1.02, r: 34.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Coder 30B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-01
timestamp: 2026-10-01T00:00:00Z
---

# Qwen3 Coder 30B A3B

Alibaba · Open · Small · 컨텍스트 262k · 종합지능 **10.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.45 · 출력 $2.25 · 혼합 $0.63/1M · 79.0 t/s · TTFT 2.65s · 262k ctx` · 가성비 15.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.9 | -0.74 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 52.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 37.4 | -0.84 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 52.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 43.0 | -0.46 | 실측 | [[terminal-bench]] 15.0%×0.5 |
| 에이전트 | 44.5 | -0.37 | 실측 | [[tau2-bench]] 35.0%×1.0, [[terminal-bench]] 15.0%×1.0 |
| 신뢰성 | 44.4 | -0.38 | 실측 | [[aa-omniscience]] 20.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 43.4 | -0.44 | 실측 | [[aa-lcr]] 33.0%×1.0 |
| 지시 따르기 | 34.7 | -1.02 | 실측 | [[ifbench]] 33.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
