---
type: Model
title: GLM-4.7
creator: Z AI
license: Open
intelligence_index: 26.0
price_blended_usd_1m: 0.76
output_speed_tps: 100.0
context_window: 200000
status: past
size_class: Large
params_b: 357
is_reasoning: true
radar:
  knowledge: { s: 54.2, z: 0.64, r: 59.6, estimated: false }  # 전문 지식
  reasoning: { s: 46.5, z: 0.55, r: 58.3, estimated: false }  # 추론
  coding: { s: 48.5, z: 0.58, r: 58.7, estimated: false }  # 코딩
  agentic: { s: 54.0, z: 0.63, r: 59.5, estimated: false }  # 에이전트
  trust: { s: 5.2, z: -0.91, r: 36.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 79.8, z: 0.94, r: 64.2, estimated: false }  # 긴문맥
  instruction: { s: 78.9, z: 1.1, r: 66.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.7
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# GLM-4.7

Z AI · Open · Large(357B) · 컨텍스트 200k · 종합지능 **26.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.6 · 출력 $2.2 · 혼합 $0.76/1M · 100.0 t/s · TTFT 1.3s · 200k ctx` · 가성비 34.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.6 | +0.64 | 실측 | [[aa-omniscience]] 29.0%×1.0, [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 27.0%×0.3 |
| 추론 | 58.3 | +0.55 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 27.0%×1.0 |
| 코딩 | 58.7 | +0.58 | 실측 | [[terminal-bench]] 32.0%×0.5 |
| 에이전트 | 59.5 | +0.63 | 실측 | [[gdpval]] 30.0%×1.0, [[tau2-bench]] 96.0%×1.0, [[tau3-banking]] 12.0%×1.0, [[terminal-bench]] 32.0%×1.0 |
| 신뢰성 | 36.3 | -0.91 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.2 | +0.94 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 66.5 | +1.1 | 실측 | [[ifbench]] 68.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
