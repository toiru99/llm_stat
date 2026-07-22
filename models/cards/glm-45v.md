---
type: Model
title: GLM-4.5V
creator: Z AI
license: Open
intelligence_index: 9.0
price_blended_usd_1m: None
output_speed_tps: 47.0
context_window: 64000
status: past
size_class: Medium
params_b: 108
is_reasoning: true
radar:
  knowledge: { s: 37.6, z: -0.15, r: 47.7, estimated: false }  # 전문 지식
  reasoning: { s: 26.2, z: -0.39, r: 44.1, estimated: false }  # 추론
  coding: { s: 27.0, z: -0.82, r: 37.7, estimated: false }  # 코딩
  agentic: { s: 15.4, z: -0.81, r: 37.9, estimated: false }  # 에이전트
  trust: { s: 21.2, z: -0.31, r: 45.3, estimated: false }  # 신뢰성
  multimodal: { s: 50.7, z: -1.01, r: 34.8, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.46, r: 28.1, estimated: false }  # 긴문맥
  instruction: { s: 31.0, z: -0.91, r: 36.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.5V
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-22
timestamp: 2026-07-22T00:00:00Z
---

# GLM-4.5V

Z AI · Open · Medium(108B) · 컨텍스트 64k · 종합지능 **9.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 신뢰성
- **약점**: 멀티모달, 긴문맥

## 실용 지표
`입력 $0.6 · 출력 $1.8 · 혼합 $None/1M · 47.0 t/s · TTFT 4.53s · 64k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.7 | -0.15 | 실측 | [[aa-omniscience]] 21.0%×1.0, [[gpqa-diamond]] 68.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 44.1 | -0.39 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 68.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 37.7 | -0.82 | 실측 | [[scicode]] 22.0%×1.0, [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 37.9 | -0.81 | 실측 | [[tau2-bench]] 23.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 45.3 | -0.31 | 실측 | [[aa-omniscience]] 19.0%×1.0 |
| 멀티모달 | 34.8 | -1.01 | 실측 | [[mmmu-pro]] 50.0%×1.0 |
| 긴문맥 | 28.1 | -1.46 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 36.4 | -0.91 | 실측 | [[ifbench]] 34.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
