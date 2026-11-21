---
type: Model
title: Qwen3 30B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.1765
output_speed_tps: 95.9509443702318
context_window: 32768
status: past
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 37.2, z: -0.49, r: 42.7, estimated: false }  # 전문 지식
  reasoning: { s: 22.3, z: -0.66, r: 40.2, estimated: false }  # 추론
  coding: { s: 3.4, z: -1.24, r: 31.4, estimated: false }  # 코딩
  agentic: { s: 14.9, z: -1.04, r: 34.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.59, r: 26.1, estimated: false }  # 긴문맥
  instruction: { s: 41.3, z: -0.53, r: 42.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 30B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# Qwen3 30B

Alibaba · Open · Small · 컨텍스트 32k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 지시 따르기
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $0.135 · 출력 $0.55 · 혼합 $0.1765/1M · 95.9509443702318 t/s · TTFT 0.41459610277331s · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.7 | -0.49 | 실측 | [[gpqa-diamond]] 61.616161616161605%×0.4, [[humanitys-last-exam]] 6.16%×0.3 |
| 추론 | 40.2 | -0.66 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 61.616161616161605%×1.0, [[humanitys-last-exam]] 6.16%×1.0 |
| 코딩 | 31.4 | -1.24 | 실측 | [[terminal-bench]] 2.27272727272727%×0.5 |
| 에이전트 | 34.4 | -1.04 | 실측 | [[tau2-bench]] 26.023391812865498%×1.0, [[terminal-bench]] 2.27272727272727%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.1 | -1.59 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 42.1 | -0.53 | 실측 | [[ifbench]] 41.4965986394558%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
