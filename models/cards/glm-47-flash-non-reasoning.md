---
type: Model
title: GLM-4.7-Flash (Non-reasoning)
creator: Z AI
license: Open
intelligence_index: 10.0
price_blended_usd_1m: 0.103
output_speed_tps: 116.0
context_window: 200000
status: past
size_class: Small
params_b: 31.2
is_reasoning: false
radar:
  knowledge: { s: 22.2, z: -0.9, r: 36.5, estimated: false }  # 전문 지식
  reasoning: { s: 15.9, z: -0.92, r: 36.1, estimated: false }  # 추론
  coding: { s: 6.1, z: -0.91, r: 36.3, estimated: false }  # 코딩
  agentic: { s: 49.5, z: 0.46, r: 56.9, estimated: false }  # 에이전트
  trust: { s: 4.1, z: -0.96, r: 35.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 22.5, z: -0.82, r: 37.7, estimated: false }  # 긴문맥
  instruction: { s: 47.9, z: -0.2, r: 47.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.7-Flash (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# GLM-4.7-Flash (Non-reasoning)

Z AI · Open · Small(31.2B) · 컨텍스트 200k · 종합지능 **10.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.07 · 출력 $0.4 · 혼합 $0.103/1M · 116.0 t/s · TTFT 1.56s · 200k ctx` · 가성비 97.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.5 | -0.9 | 실측 | [[aa-omniscience]] 13.0%×1.0, [[gpqa-diamond]] 45.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 36.1 | -0.92 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 45.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 36.3 | -0.91 | 실측 | [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 56.9 | +0.46 | 실측 | [[tau2-bench]] 92.0%×1.0, [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | 35.6 | -0.96 | 실측 | [[aa-omniscience]] 6.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 37.7 | -0.82 | 실측 | [[aa-lcr]] 20.0%×1.0 |
| 지시 따르기 | 47.1 | -0.2 | 실측 | [[ifbench]] 46.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
