---
type: Model
title: Qwen3 14B
creator: Alibaba
license: Open
intelligence_index: 5.0
price_blended_usd_1m: 0.735
output_speed_tps: 60.0
context_window: 32800
status: past
size_class: Small
params_b: 14.8
is_reasoning: true
radar:
  knowledge: { s: 28.1, z: -0.62, r: 40.7, estimated: false }  # 전문 지식
  reasoning: { s: 21.7, z: -0.64, r: 40.3, estimated: false }  # 추론
  coding: { s: 6.1, z: -0.91, r: 36.3, estimated: false }  # 코딩
  agentic: { s: 13.2, z: -0.93, r: 36.1, estimated: false }  # 에이전트
  trust: { s: 22.7, z: -0.09, r: 48.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.51, r: 27.3, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -0.5, r: 42.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 14B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Qwen3 14B

Alibaba · Open · Small(14.8B) · 컨텍스트 32k · 종합지능 **5.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.35 · 출력 $4.2 · 혼합 $0.735/1M · 60.0 t/s · TTFT 2.72s · 32k ctx` · 가성비 6.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.7 | -0.62 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 60.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 40.3 | -0.64 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 60.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 36.3 | -0.91 | 실측 | [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 36.1 | -0.93 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 35.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | 48.7 | -0.09 | 실측 | [[aa-omniscience]] 24.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.3 | -1.51 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 42.6 | -0.5 | 실측 | [[ifbench]] 41.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
