---
type: Model
title: Qwen3 30B
creator: Alibaba
license: Open
intelligence_index: 9.0
price_blended_usd_1m: None
output_speed_tps: 106.0
context_window: 32800
status: past
size_class: Small
params_b: 30.5
is_reasoning: false
radar:
  knowledge: { s: 31.3, z: -0.46, r: 43.0, estimated: false }  # 전문 지식
  reasoning: { s: 24.5, z: -0.5, r: 42.6, estimated: false }  # 추론
  coding: { s: 32.1, z: -0.62, r: 40.8, estimated: false }  # 코딩
  agentic: { s: 14.6, z: -0.84, r: 37.4, estimated: false }  # 에이전트
  trust: { s: 21.8, z: -0.3, r: 45.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.47, r: 28.0, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -0.51, r: 42.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 30B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-27
timestamp: 2026-07-27T00:00:00Z
---

# Qwen3 30B

Alibaba · Open · Small(30.5B) · 컨텍스트 32k · 종합지능 **9.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.2 · 출력 $2.4 · 혼합 $None/1M · 106.0 t/s · TTFT 2.24s · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.0 | -0.46 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 62.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 42.6 | -0.5 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 62.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 40.8 | -0.62 | 실측 | [[scicode]] 28.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 37.4 | -0.84 | 실측 | [[tau2-bench]] 26.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 45.6 | -0.3 | 실측 | [[aa-omniscience]] 20.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.0 | -1.47 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 42.4 | -0.51 | 실측 | [[ifbench]] 41.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
