---
type: Model
title: Qwen3 32B
creator: Alibaba
license: Open
intelligence_index: 11.0
price_blended_usd_1m: 0.91
output_speed_tps: 104.0
context_window: 32800
status: past
size_class: Small
params_b: 32.8
is_reasoning: false
radar:
  knowledge: { s: 32.4, z: -0.42, r: 43.8, estimated: false }  # 전문 지식
  reasoning: { s: 26.1, z: -0.45, r: 43.2, estimated: false }  # 추론
  coding: { s: 40.4, z: -0.32, r: 45.2, estimated: false }  # 코딩
  agentic: { s: 11.2, z: -1.0, r: 35.0, estimated: false }  # 에이전트
  trust: { s: 18.6, z: -0.38, r: 44.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.52, r: 27.2, estimated: false }  # 긴문맥
  instruction: { s: 33.8, z: -0.83, r: 37.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 32B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-17
timestamp: 2026-08-17T00:00:00Z
---

# Qwen3 32B

Alibaba · Open · Small(32.8B) · 컨텍스트 32k · 종합지능 **11.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 신뢰성
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.7 · 출력 $8.4 · 혼합 $0.91/1M · 104.0 t/s · TTFT 2.45s · 32k ctx` · 가성비 12.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.8 | -0.42 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 67.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 43.2 | -0.45 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 67.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 45.2 | -0.32 | 실측 | [[scicode]] 35.0%×1.0, [[terminal-bench]] 3.0%×0.5 |
| 에이전트 | 35.0 | -1.0 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 30.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 3.0%×1.0 |
| 신뢰성 | 44.4 | -0.38 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.2 | -1.52 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 37.5 | -0.83 | 실측 | [[ifbench]] 36.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
