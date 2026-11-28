---
type: Model
title: Mi:dm K 2.5 Pro
creator: Korea Telecom
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 43.9, z: -0.14, r: 47.9, estimated: false }  # 전문 지식
  reasoning: { s: 26.4, z: -0.43, r: 43.5, estimated: false }  # 추론
  coding: { s: 3.4, z: -1.27, r: 31.0, estimated: false }  # 코딩
  agentic: { s: 45.4, z: -0.06, r: 49.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 10.2, z: -1.46, r: 28.2, estimated: false }  # 긴문맥
  instruction: { s: 52.2, z: 0.07, r: 51.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mi:dm K 2.5 Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Mi:dm K 2.5 Pro

Korea Telecom · Proprietary · Small · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 47.9 | -0.14 | 실측 | [[gpqa-diamond]] 70.101%×0.4, [[humanitys-last-exam]] 8.06302%×0.3 |
| 추론 | 43.5 | -0.43 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 70.101%×1.0, [[humanitys-last-exam]] 8.06302%×1.0 |
| 코딩 | 31.0 | -1.27 | 실측 | [[terminal-bench]] 2.27273%×0.5 |
| 에이전트 | 49.1 | -0.06 | 실측 | [[tau2-bench]] 86.5497%×1.0, [[terminal-bench]] 2.27273%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.2 | -1.46 | 실측 | [[aa-lcr]] 9%×1.0 |
| 지시 따르기 | 51.1 | +0.07 | 실측 | [[ifbench]] 49.3197%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
