---
type: Model
title: GLM-4.7
creator: Z AI
license: Open
intelligence_index: 22.0
price_blended_usd_1m: 0.655
output_speed_tps: 67.0
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 53.9, z: 0.53, r: 57.9, estimated: false }  # 전문 지식
  reasoning: { s: 46.0, z: 0.43, r: 56.5, estimated: false }  # 추론
  coding: { s: 48.5, z: 0.42, r: 56.3, estimated: false }  # 코딩
  agentic: { s: 51.6, z: 0.49, r: 57.4, estimated: false }  # 에이전트
  trust: { s: 5.2, z: -1.0, r: 35.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 79.8, z: 0.85, r: 62.8, estimated: false }  # 긴문맥
  instruction: { s: 78.9, z: 1.02, r: 65.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.7
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-01
timestamp: 2026-10-01T00:00:00Z
---

# GLM-4.7

Z AI · Open · Unknown · 컨텍스트 200k · 종합지능 **22.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $0.6 · 출력 $2.2 · 혼합 $0.655/1M · 67.0 t/s · TTFT 1.29s · 200k ctx` · 가성비 33.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.9 | +0.53 | 실측 | [[aa-omniscience]] 29.0%×1.0, [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 27.0%×0.3 |
| 추론 | 56.5 | +0.43 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 27.0%×1.0 |
| 코딩 | 56.3 | +0.42 | 실측 | [[terminal-bench]] 32.0%×0.5 |
| 에이전트 | 57.4 | +0.49 | 실측 | [[gdpval]] 25.0%×1.0, [[tau2-bench]] 96.0%×1.0, [[tau3-banking]] 12.0%×1.0, [[terminal-bench]] 32.0%×1.0 |
| 신뢰성 | 35.0 | -1.0 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.8 | +0.85 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 65.3 | +1.02 | 실측 | [[ifbench]] 68.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
