---
type: Model
title: Qwen2.5 72B
creator: Alibaba
license: Open
intelligence_index: 9.0
price_blended_usd_1m: 0.393
output_speed_tps: None
context_window: 131000
status: past
size_class: Medium
params_b: 72
is_reasoning: false
radar:
  knowledge: { s: 27.2, z: -0.67, r: 39.9, estimated: false }  # 전문 지식
  reasoning: { s: 17.1, z: -0.88, r: 36.9, estimated: false }  # 추론
  coding: { s: 32.5, z: -0.63, r: 40.6, estimated: false }  # 코딩
  agentic: { s: 21.5, z: -0.6, r: 41.0, estimated: false }  # 에이전트
  trust: { s: 13.4, z: -0.5, r: 42.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 24.1, z: -0.77, r: 38.4, estimated: false }  # 긴문맥
  instruction: { s: 35.2, z: -0.72, r: 39.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen2.5 72B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# Qwen2.5 72B

Alibaba · Open · Medium(72B) · 컨텍스트 131k · 종합지능 **9.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 긴문맥, 추론

## 실용 지표
`입력 $0.47 · 출력 $0.49 · 혼합 $0.393/1M · None t/s · TTFT Nones · 131k ctx` · 가성비 22.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.9 | -0.67 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 49.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 36.9 | -0.88 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 49.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 40.6 | -0.63 | 실측 | [[scicode]] 27.0%×1.0, [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 41.0 | -0.6 | 실측 | [[tau2-bench]] 35.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 42.5 | -0.5 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 38.4 | -0.77 | 실측 | [[aa-lcr]] 20.0%×1.0 |
| 지시 따르기 | 39.2 | -0.72 | 실측 | [[ifbench]] 37.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
