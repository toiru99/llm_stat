---
type: Model
title: Mi:dm K 2.5 Pro Preview
creator: Korea Telecom
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 45.9, z: -0.04, r: 49.4, estimated: false }  # 전문 지식
  reasoning: { s: 27.7, z: -0.37, r: 44.5, estimated: false }  # 추론
  coding: { s: 4.6, z: -1.23, r: 31.6, estimated: false }  # 코딩
  agentic: { s: 27.2, z: -0.7, r: 39.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 16.5, z: -1.26, r: 31.1, estimated: false }  # 긴문맥
  instruction: { s: 47.0, z: -0.14, r: 47.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mi:dm K 2.5 Pro Preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Mi:dm K 2.5 Pro Preview

Korea Telecom · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 지시 따르기
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 49.4 | -0.04 | 실측 | [[gpqa-diamond]] 72.2222%×0.4, [[humanitys-last-exam]] 9.08248%×0.3 |
| 추론 | 44.5 | -0.37 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 72.2222%×1.0, [[humanitys-last-exam]] 9.08248%×1.0 |
| 코딩 | 31.6 | -1.23 | 실측 | [[terminal-bench]] 3.0303%×0.5 |
| 에이전트 | 39.5 | -0.7 | 실측 | [[tau2-bench]] 49.4152%×1.0, [[terminal-bench]] 3.0303%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 31.1 | -1.26 | 실측 | [[aa-lcr]] 14.6667%×1.0 |
| 지시 따르기 | 47.8 | -0.14 | 실측 | [[ifbench]] 45.5782%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
