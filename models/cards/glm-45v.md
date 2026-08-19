---
type: Model
title: GLM-4.5V
creator: Z AI
license: Open
intelligence_index: 9.0
price_blended_usd_1m: 0.72
output_speed_tps: 83.0
context_window: 64000
status: past
size_class: Medium
params_b: 108
is_reasoning: true
radar:
  knowledge: { s: 36.1, z: -0.25, r: 46.3, estimated: false }  # 전문 지식
  reasoning: { s: 25.8, z: -0.47, r: 42.9, estimated: false }  # 추론
  coding: { s: 27.0, z: -0.87, r: 36.9, estimated: false }  # 코딩
  agentic: { s: 15.4, z: -0.84, r: 37.4, estimated: false }  # 에이전트
  trust: { s: 15.1, z: -0.53, r: 42.0, estimated: false }  # 신뢰성
  multimodal: { s: 50.0, z: -1.07, r: 33.9, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.53, r: 27.1, estimated: false }  # 긴문맥
  instruction: { s: 31.0, z: -0.95, r: 35.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.5V
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-19
timestamp: 2026-08-19T00:00:00Z
---

# GLM-4.5V

Z AI · Open · Medium(108B) · 컨텍스트 64k · 종합지능 **9.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 멀티모달, 긴문맥

## 실용 지표
`입력 $0.6 · 출력 $1.8 · 혼합 $0.72/1M · 83.0 t/s · TTFT 1.79s · 64k ctx` · 가성비 12.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.3 | -0.25 | 실측 | [[aa-omniscience]] 21.0%×1.0, [[gpqa-diamond]] 68.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 42.9 | -0.47 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 68.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 36.9 | -0.87 | 실측 | [[scicode]] 22.0%×1.0, [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 37.4 | -0.84 | 실측 | [[tau2-bench]] 23.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 42.0 | -0.53 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | 33.9 | -1.07 | 실측 | [[mmmu-pro]] 50.0%×1.0 |
| 긴문맥 | 27.1 | -1.53 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 35.7 | -0.95 | 실측 | [[ifbench]] 34.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
