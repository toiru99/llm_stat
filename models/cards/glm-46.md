---
type: Model
title: GLM-4.6
creator: Z AI
license: Open
intelligence_index: 19.0
price_blended_usd_1m: 0.407
output_speed_tps: 36.0
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 46.1, z: 0.21, r: 53.2, estimated: false }  # 전문 지식
  reasoning: { s: 34.6, z: -0.05, r: 49.3, estimated: false }  # 추론
  coding: { s: 37.9, z: 0.1, r: 51.5, estimated: false }  # 코딩
  agentic: { s: 38.0, z: 0.01, r: 50.1, estimated: false }  # 에이전트
  trust: { s: 4.1, z: -1.01, r: 34.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 60.7, z: 0.31, r: 54.6, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.41, r: 43.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.6
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-28
timestamp: 2026-09-28T00:00:00Z
---

# GLM-4.6

Z AI · Open · Unknown · 컨텍스트 200k · 종합지능 **19.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.55 · 출력 $2.2 · 혼합 $0.407/1M · 36.0 t/s · TTFT 4.16s · 200k ctx` · 가성비 46.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.2 | +0.21 | 실측 | [[aa-omniscience]] 27.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 49.3 | -0.05 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 51.5 | +0.1 | 실측 | [[terminal-bench]] 25.0%×0.5 |
| 에이전트 | 50.1 | +0.01 | 실측 | [[gdpval]] 12.0%×1.0, [[tau2-bench]] 70.0%×1.0, [[tau3-banking]] 13.0%×1.0, [[terminal-bench]] 25.0%×1.0 |
| 신뢰성 | 34.8 | -1.01 | 실측 | [[aa-omniscience]] 6.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 54.6 | +0.31 | 실측 | [[aa-lcr]] 54.0%×1.0 |
| 지시 따르기 | 43.9 | -0.41 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
