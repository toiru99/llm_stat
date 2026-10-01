---
type: Model
title: GLM-4.6V
creator: Z AI
license: Open
intelligence_index: 11.0
price_blended_usd_1m: 0.276
output_speed_tps: 80.0
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 33.7, z: -0.41, r: 43.9, estimated: false }  # 전문 지식
  reasoning: { s: 29.0, z: -0.34, r: 44.9, estimated: false }  # 추론
  coding: { s: 21.2, z: -0.52, r: 42.2, estimated: false }  # 코딩
  agentic: { s: 26.8, z: -0.46, r: 43.2, estimated: false }  # 에이전트
  trust: { s: 48.5, z: 1.01, r: 65.2, estimated: false }  # 신뢰성
  multimodal: { s: 46.6, z: -1.24, r: 31.5, estimated: false }  # 멀티모달
  long_context: { s: 55.1, z: 0.11, r: 51.6, estimated: false }  # 긴문맥
  instruction: { s: 25.4, z: -1.19, r: 32.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.6V
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-01
timestamp: 2026-10-01T00:00:00Z
---

# GLM-4.6V

Z AI · Open · Unknown · 컨텍스트 128k · 종합지능 **11.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.3 · 출력 $0.9 · 혼합 $0.276/1M · 80.0 t/s · TTFT 3.31s · 128k ctx` · 가성비 39.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.9 | -0.41 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 72.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 44.9 | -0.34 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 72.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 42.2 | -0.52 | 실측 | [[terminal-bench]] 14.0%×0.5 |
| 에이전트 | 43.2 | -0.46 | 실측 | [[tau2-bench]] 32.0%×1.0, [[terminal-bench]] 14.0%×1.0 |
| 신뢰성 | 65.2 | +1.01 | 실측 | [[aa-omniscience]] 49.0%×1.0 |
| 멀티모달 | 31.5 | -1.24 | 실측 | [[mmmu-pro]] 49.0%×1.0 |
| 긴문맥 | 51.6 | +0.11 | 실측 | [[aa-lcr]] 49.0%×1.0 |
| 지시 따르기 | 32.1 | -1.19 | 실측 | [[ifbench]] 30.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
