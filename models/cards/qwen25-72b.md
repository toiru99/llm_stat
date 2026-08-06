---
type: Model
title: Qwen2.5 72B
creator: Alibaba
license: Open
intelligence_index: 10.0
price_blended_usd_1m: 0.393
output_speed_tps: None
context_window: 131000
status: past
size_class: Medium
params_b: 72
is_reasoning: false
radar:
  knowledge: { s: 28.6, z: -0.6, r: 41.0, estimated: false }  # 전문 지식
  reasoning: { s: 17.4, z: -0.86, r: 37.0, estimated: false }  # 추론
  coding: { s: 32.5, z: -0.61, r: 40.8, estimated: false }  # 코딩
  agentic: { s: 21.5, z: -0.57, r: 41.4, estimated: false }  # 에이전트
  trust: { s: 16.1, z: -0.58, r: 41.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 26.3, z: -0.7, r: 39.5, estimated: false }  # 긴문맥
  instruction: { s: 35.2, z: -0.75, r: 38.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen2.5 72B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# Qwen2.5 72B

Alibaba · Open · Medium(72B) · 컨텍스트 131k · 종합지능 **10.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 지시 따르기, 추론

## 실용 지표
`입력 $0.47 · 출력 $0.49 · 혼합 $0.393/1M · None t/s · TTFT Nones · 131k ctx` · 가성비 25.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.0 | -0.6 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 49.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 37.0 | -0.86 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 49.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 40.8 | -0.61 | 실측 | [[scicode]] 27.0%×1.0, [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 41.4 | -0.57 | 실측 | [[tau2-bench]] 35.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 41.3 | -0.58 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 39.5 | -0.7 | 실측 | [[aa-lcr]] 20.0%×1.0 |
| 지시 따르기 | 38.8 | -0.75 | 실측 | [[ifbench]] 37.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
